const express = require('express');
port = process.env.port || 9999;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
