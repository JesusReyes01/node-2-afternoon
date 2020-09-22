let messages = [];
let id = 0

module.exports = {
    create: (req, res)=> {
        console.log(req.body)

        let newMessage = {
            id: id,
            text: req.body.text,
            time: req.body.time
        }
        messages.push(newMessage)
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req,res) => {
        console.log(req.params)
        console.log(req.body)

        let message = messages.find(el => el.id === +req.params.id)
        message.text = req.body.text

        res.status(200).send(messages);
    },
    delete: (req,res) => {
        console.log(req.params)
        
        let index = messages.findIndex(el => el.id === +req.params.id)
        messages.splice(index, 1)
        res.status(200).send(messages);
    }
}