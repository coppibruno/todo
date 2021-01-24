const ParamIdValidation = (req, res, next) => {
    if (!req.params.id){
        return res.status(400).json( { error: 'Parametro id é obrigatório'} );
    }

    next();
}

module.exports = ParamIdValidation;