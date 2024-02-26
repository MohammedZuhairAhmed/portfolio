# Portfolio

## Prerequisites
- Create a training instance from [Contentstack's Academy](https://www.contentstack.com/academy) to obtain the necessary environment variables for the stack environment.
- Create a delivery token (ACCESS TOKEN) for your stack. You can find the creation steps in this [link](https://www.contentstack.com/docs/developers/create-tokens/create-a-delivery-token).

## Environment Setup
Create an environment file named `.env` in the root directory of the project. Add the following variables to the file:

```bash
REACT_APP_BASE_URL=your_contentstack_delivery_api_base_url
REACT_APP_API_KEY=your_stack_api_key
REACT_APP_ACCESS_TOKEN=your_stack_delivery_token
```

## Running Steps
To run the project locally, follow these steps:

1. Install dependencies:

```bash
npm install
```
2. Start the development server:
```bash
npm start
```

## Additional Notes
This project is licensed under the Apache License 2.0. For more information, please see the [LICENSE](LICENSE) file.
