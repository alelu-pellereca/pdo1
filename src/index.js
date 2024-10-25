const express = require('express');
const { json } = require('express');

const PORT = 8080//process.env.PORT || 8080;

listen(PORT, () => {
    console.log(`Server is running on port ---- ${PORT}`);
});