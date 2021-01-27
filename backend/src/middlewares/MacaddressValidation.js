const MacaddressValidation = (req, res, next) => {
    if (!req.params.macaddress){
        return res.status(400).json( { error: 'macaddress é obrigatório'} );
    }

    next();
}

module.exports = MacaddressValidation;