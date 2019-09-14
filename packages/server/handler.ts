import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import request from "request-promise-native";

const {
  ORIGIN,
  SQUARE_LOCATION_ID,
  SQUARE_API_KEY,
  AIR_TABLE_API_KEY
} = process.env;

const tableToBase = {
  inventory: "appyaP98DN2PwO347"
};

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event
      },
      null,
      2
    )
  };
};

export const createOrder: APIGatewayProxyHandler = async (event, _context) => {
  console.log(event);
  const squareResponse = await request({
    method: "POST",
    url: `https://connect.squareupsandbox.com/v2/locations/${SQUARE_LOCATION_ID}/checkouts`,
    headers: {
      Authorization: `Bearer ${SQUARE_API_KEY}`
    },
    body: {
      idempotency_key: Math.random(),
      ask_for_shipping_address: true,
      redirect_ur: `${ORIGIN}/thanks`,
      order: {
        order: {
          location_id: SQUARE_LOCATION_ID,
          total_money: 10000,
          line_items: {
            name: "that thing",
            quantity: 1,
            total_money: 1000
          }
        }
      }
    }
  });
  const { checkout } = squareResponse.body;
  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
};

export const confirmOrder: APIGatewayProxyHandler = async (event, _context) => {
  console.log(event);
};

// TODO: add retry logic particularly for airbase
export const airTableSelect: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  console.log(event);
  const { table, query } = JSON.parse(event.body);
  const response = await request({
    method: "GET",
    url: `https://api.airtable.com/v0/${tableToBase[table]}/Table%201/`,
    headers: {
      Authorization: `Bearer ${AIR_TABLE_API_KEY}`
    },
    query
  });
  console.log(response.body);

  return {
    statusCode: response.statusCode,
    body: JSON.stringify(response.body)
  };
};
