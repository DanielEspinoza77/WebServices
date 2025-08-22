import express from 'express';

const app = express();
const PORT = 3000;


app.get('/test', (req, res) => {
    try {
        const users = [
            { name: 'Fernando', cellphone: '33224455667', email: 'ferflo@gmail.com' }
        ];

        
        if (users.length === 0) {
            return res.status(404).json({ error: 'No se encontraron usuarios' });
        }

        
        res.status(200).json(users);
    } catch (err) {
        
        res.status(500).json({ error: 'Error interno en /test' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
