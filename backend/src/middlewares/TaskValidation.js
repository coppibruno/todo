const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {


    const { macaddress, type, tittle, description, when } = req.body; 

    if (!macaddress)
        return res.status(400).json( { error: 'macaddress é obrigatório'} );

    if (!type)
        return res.status(400).json( { error: 'tipo é obrigatório'} );

    if (!tittle)
        return res.status(400).json( { error: 'titulo é obrigatório'} );
    
    if (!description)
        return res.status(400).json( { error: 'descrição é obrigatório'} );        

    if (!when)
        return res.status(400).json( { error: 'data é obrigatório'} ); 
    
    

    let exists;

    if (req.params.id){
        exists = await TaskModel.findOne(
            { 
                '_id': {'$ne': req.params.id},
                'when': {'$eq' : new Date(when) },
                'macaddress' : {'$in': macaddress}
            });
        
    }else{

        if (isPast(new Date(when)))
        return res.status(400).json( { error: 'escolha uma data e hora futura'} );  

        exists = await TaskModel.findOne(
        { 
            'when': {'$eq' : new Date(when) },
            'macaddress' : {'$in': macaddress}
        });
    }

    if (exists){
        return res.status(400).json( { error: 'já existe uma tarefa nesse dia e horário.'} );  
    }

    next();
    

}

module.exports = TaskValidation;