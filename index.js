const express = require('express');
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const app = express();

app.use(express.json());

app.post('/verificar', async (req, res) => {
    const { hardware_id } = req.body;
    if (!hardware_id) return res.status(400).json({ erro: 'Faltando hardware_id' });

    const valor = await db.get(`registros.${hardware_id}`);
    res.json({ encontrado: valor === 'Johnson' });
});

app.post('/registrar', async (req, res) => {
    const { hardware_id } = req.body;
    if (!hardware_id) return res.status(400).json({ erro: 'Faltando hardware_id' });

    await db.set(`registros.${hardware_id}`, 'Johnson');
    res.json({ sucesso: true });
});

app.get('/', (req, res) => {
    res.send('API ONLINE');
});

app.listen(process.env.PORT || 10000, () => {
    console.log('API rodando');
});
