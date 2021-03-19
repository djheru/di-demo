import React, { useEffect, useReducer } from 'react';
import { API } from 'aws-amplify';
import { List, Divider, Card } from "antd";
import { DeleteOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import { v4 as uuid } from 'uuid';
import DealershipForm from './DealershipForm';
import { listDealerships as listDealershipsQuery } from './graphql/queries';
import { 
  createDealership as createDealershipMutation,
  deleteDealership as deleteDealershipMutation
} from './graphql/mutations';
import {
  onCreateDealership,
  onDeleteDealership,
} from './graphql/subscriptions';

const initialState = {
  dealerships: [],
  loading: true,
  error: false,
  form: {
    name: '',
    telephone: '',
    contactName: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
  }
};

const CLIENT_ID = uuid();

function reducer(state, action) {
  const getIndex = (dealership) => state.dealerships.findIndex((n) => n.id === dealership.id);
  switch (action.type) {
    case "SET_DEALERSHIPS":
      return { ...state, dealerships: action.dealerships, loading: false };
    case "ADD_DEALERSHIP":
      return { ...state, dealerships: [action.dealership, ...state.dealerships], loading: false };
    case "REMOVE_DEALERSHIP":
      const removeIndex = getIndex(action.dealership);
      const dealerships = [
        ...state.dealerships.slice(0, removeIndex),
        ...state.dealerships.slice(removeIndex + 1),
      ];
      return { ...state, dealerships, loading: false };
    case "RESET_FORM":
      return { ...state, form: initialState.form };
    case "SET_INPUT":
      return { ...state, form: { ...state.form, [action.name]: action.value } };
    case "ERROR":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

const DealershipList = ({ isAdmin }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchDealerships() {
    try {
      const dealershipsData = await API.graphql({
        query: listDealershipsQuery,
        authMode: 'API_KEY'
      });
      dispatch({ 
        type: "SET_DEALERSHIPS", 
        dealerships: dealershipsData.data.listDealerships.items 
      });
    } catch (e) {
      console.log(e.message || e.stack);
      dispatch({ type: "ERROR" });
    }
  }

  async function createDealership() {
    const { form } = state;
    const input = {
      ...form,
      clientId: CLIENT_ID,
      id: uuid(),
    };
    dispatch({ type: "ADD_DEALERSHIP", dealership: input });
    dispatch({ type: "RESET_FORM" });
    try {
      await API.graphql({
        query: createDealershipMutation,
        variables: { input },
      });
    } catch (e) {
      console.log(e.message || e.stack || e);
    }
  }

  async function deleteDealership(dealership) {
    dispatch({ type: "REMOVE_DEALERSHIP", dealership });
    try {
      const { id } = dealership;
      await API.graphql({
        query: deleteDealershipMutation,
        variables: { input: { id } },
      });
    } catch (e) {
      console.log(e.message || e.stack);
    }
  }

  useEffect(() => {
    fetchDealerships();
    const createDealershipSubscription = API.graphql({
      query: onCreateDealership,
      authMode: 'API_KEY'
    }).subscribe({
      next: (dealershipData) => {
        const dealership = dealershipData.value.data.onCreateDealership;
        if (CLIENT_ID !== dealership.clientId) {
          dispatch({ type: "ADD_DEALERSHIP", dealership });
        }
      },
    })
    const deleteDealershipSubscription = API.graphql({
      query: onDeleteDealership,
      authMode: 'API_KEY'
    }).subscribe({
      next: (dealershipData) => {
        const dealership = dealershipData.value.data.onDeleteDealership;
        if (CLIENT_ID !== dealership.clientId) {
          dispatch({ type: "REMOVE_DEALERSHIP", dealership });
        }
      },
    });
    return () => {
      createDealershipSubscription.unsubscribe();
      deleteDealershipSubscription.unsubscribe();
    };
  }, []);

  function onChange(e, f) {
    dispatch({ 
      type: "SET_INPUT", 
      name: e.target.name, 
      value: e.target.value 
    });
  }

  function renderItem(item) {
    return (
      <List.Item style={{ textAlign: "left" }}>
        <Card 
          title={item.name} 
          description={item.contactName}
          actions={isAdmin ? [
            <DeleteOutlined key="delete" onClick={() => deleteDealership(item)} />
          ] : []}>
          <Card.Meta title={item.name} description={item.contactName} />
          <p><PhoneOutlined /> {item.telephone}</p>
          <p>
            <EnvironmentOutlined /> 
            {item.streetAddress}
            <br />
            {item.city}, {item.state} {item.postalCode}
          </p>
        </Card>
      </List.Item>
    );
  }

  return (
    <>
      {
        isAdmin && <>
        <DealershipForm 
          formData={state.form}
          onChange={onChange}
          onSubmit={createDealership} />
        <Divider />
        </>
      }

      <List
        grid={{ gutter: 16, column: 4 }}
        loading={state.loading}
        dataSource={state.dealerships}
        renderItem={renderItem} />
    </>
  );
}

export default DealershipList;