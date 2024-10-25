const { listen } = require('./app');

const PORT = 3000//process.env.PORT || 3000;

listen(PORT, () => {
    console.log(`Server is running on port ---- ${PORT}`);
});