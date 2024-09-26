// AWS Lambda Function 
exports.handler = async (event, context) => {
    
    // Get name from URL Query Parameter - if null defaults to 'Stranger'
    const name = event.queryStringParameters.name || 'Stranger';
    // String interpolation with BACK-TICKS
    const data = { hello: `Hello ${name}!` };

    // HTTP Response
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};