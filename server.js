const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 3000;

// Permite que o Express leia JSON no corpo da requisição
app.use(express.json());

// Rota que responde a requisições POST para "/"
app.post('/', (req, res) => {
    console.log('Requisição recebida!');
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);

    // Aqui você pode chamar outra API usando fetch/axios/etc.
    res.send('Recebido com sucesso!');
});

// Rota que responde a requisições POST para "/"
app.post('/payments/:paymentId/settlements', (req, res) => {
    const paymentId = req.params.paymentId;
    console.log(req.body);
    // Aqui você pode chamar outra API usando fetch/axios/etc.
    res.json({
        "paymentId": paymentId,
        "settleId": paymentId,
        "value": 57,
        "code": "200",
        "message": "Successfully settled",
        "requestId": req.body.requestId,
        "connectorMetadata": [
            {
                "name": "MetadataName",
                "value": "MetadataValue"
            }
        ]
    });
});

// Rota que responde a requisições POST para "/"
app.post('/payments/:paymentId/refunds', (req, res) => {
    const paymentId = req.params.paymentId;
    console.log(req.body);
    // Aqui você pode chamar outra API usando fetch/axios/etc.
    res.json({
        "paymentId": paymentId,
        "refundId": paymentId,
        "value": 57,
        "code": "200",
        "message": "Successfully settled",
        "requestId": req.body.requestId,
        "connectorMetadata": [
            {
                "name": "MetadataName",
                "value": "MetadataValue"
            }
        ]
    });
});

app.post('/payments', async (req, res) => {
    console.log('Requisição recebida!');
    const callbackUrl = req.body?.callbackUrl;


    // Aqui você pode chamar outra API usando fetch/axios/etc.
    res.json({

        "paymentId": req.body.paymentId,
        "status": "undefined",
        "acquirer": "Sicoob",
        "tid": "1584",
        "delayToAutoSettle": 300,
        "delayToAutoSettleAfterAntifraud": 120,
        "delayToCancel": 900,
        "paymentAppData": {
            "payload": "{\"code\":\"00020101021226920014br.gov.bcb.pix2570pix-h.sicoob.com.br/qr/payload/v2/581672f0-8765-4e14-993c-0f3b4c56a41b5204000053039865802BR5925RASTRIHOSP_INDUSTRIA_E_CO6013Nao_informado62070503***63043E9A\",\"qrCodeBase64Image\":\"iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQAAAAB0CZXLAAADDElEQVR42u2ZYYqbMQxEDb6WwFc3+FoGd94oySal0F8WtCQsm+TzWxCyNBp72/nLq32BL/APAru1Fm3ofazF77P0cPB4lAFaG2tH9NlnjBn6tHb34zIgWoQi6gpOyNBaC/5Cv2uBTsL60rpS1A+hVgNd+zQJNWPV5u1SgF3Rdk0eEuEkS+O33bwMULR/eH1W9V3Ar0VwqlWVi/Lkpc/uvgtoSXlRuerdm3Uo2ObSrQOsHEtx0rmUrsLsVpEqgJiUpE10lI5CVuMMlc0zk/cBmva4UINo0a+ewdYBh7AaXRPdCUJAaBsTRcDim5LzIA5tTKaijTIA8QoPEPYsF1XE/sMq4FArFI3iQssD9ECcQoAQFwnyRDFF6ZxKQKsSr0UHrYWE6duOV8HcB9ytDJTgw8rN61TPKgSmhznjdafBIVyPtTpgzUfDhDWEypWmIvFVgPqEMYbRpFatZPtDzO8DzJHm9u3HP2k2MRqnCvBTC6kfpem1nK4ygEGiEBlpNE1Yx5y6Xgi0PG2oe/G8lHC63zmqABcrhw/2jCyxfZsPuw7A7VpJffywCz9W0+duFgBqE28RukHX2vK8G4wCgIDQr/SaCAgTTZ9XGaDUcPibblpUdGL2soqrAG/W8FdP+Z6nobSgRYAj80ynfbGePg1yJhtVAJptv8csac8u9nmkDiBVkbmB6D6LheWjDHCRIN1SLkU8fW+z3wznfcCmaiAdpIbWZX2QrFMGNJYfFxSYPZQ8dWVUAag5lxLW02Pt4EH0lwO5D9jXcTNwLGA7PZ9e42e43wYoWauWBRUYEaGjTx2Aauepo6UBF8+c/zkEXQe2Ha8HOhmS++yJ9zrgzLxF9cnHNyThu7P1brxvA57u3AztvClbvkfD8BQC1nMuZnLMn5MHwrHLAJtN+xybvWa35d4ZpwzwXiEa22WyfQLzxfYoAxjktji2eIh52r43818BRF9pdXwwXXlZ8hysVQBmOw2Oj2U+lr8MZwFAx7hbUG82iZG63xxpAdByh9LsW9of59E64Pu/xS/wnwG/AE1XlA2ToWhPAAAAAElFTkSuQmCC\"}"
        }
    });

    const callbackPayload = {
        "paymentId": req.body.paymentId,
        "status": "approved",
        "acquirer": "Sicoob",
        "tid": "1551",
        "authorizationId": "1551",
        "nsu": "1551"
    }

    if (callbackUrl) {
        try {

            const callbackResponse = await axios.post(callbackUrl, callbackPayload, {
                headers: {
                    'X-VTEX-API-AppKey': 'key',
                    'X-VTEX-API-AppToken': 'token',
                }
            });
            console.log('Callback enviado com sucesso:', callbackResponse.status);
        } catch (error) {
            console.error('Erro ao enviar callback:', error.message);
        }
    } else {
        console.warn('callbackUrl não informado no body');
    }


});

// Rota de teste GET (opcional)
app.get('/manifest', (req, res) => {
    res.json({
        paymentMethods: [
            {
                name: 'Findomestic',
                allowsSplit: 'disabled'
            },
            {
                name: 'Promissories',
                allowsSplit: 'disabled'
            }
        ],
        customFields: [
            {
                name: 'Environment',
                type: 'select',
                options: [
                    { text: 'Production', value: 'prod' },
                    { text: 'Quality', value: 'qa' }
                ]
            },
            { name: 'Partner ID', type: 'text' },
            { name: 'Vendor ID', type: 'text' },
            { name: 'User ID', type: 'text' },
            { name: 'Program ID', type: 'text' }
        ],
        usesOAuth: false,
        usesProviderHeadersName: true,
        usesAutoSettleOptions: true
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ouvindo em http://localhost:${PORT}`);
});
