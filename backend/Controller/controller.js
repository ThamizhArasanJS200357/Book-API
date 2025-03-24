const bookschema=require("../model/book");


exports.getAllbook=async(req,res)=>{
    try{
        const book=await bookschema.find();
        res.json(book);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

exports.getidbook=async(req,res)=>{
    try{
        const book=await bookschema.findById(req.params.id);
        if(!book){
            res.status(409).json({
                message:"Book not found"
            });
        }
        res.json(book);
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        })
    };
}

exports.addbook=async(req,res,next)=>{
    try{
        const {title,author,price,publishyear}= req.body;
        let book=await bookschema.findOne({title});
        if(book){
            res.status(400).json({
                message:"Book are Already exists"
            }); 
        }
        book = new bookschema({title,author,price,publishyear});
        await book.save();
        res.status(201).json(book);
        
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        });
    }
}

exports.updatebook=async(req,res)=>{
    try{
        const upbook = await bookschema.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
        });
        if(!upbook){
            res.status(404).json({
                message:"book not found"
            })
        }
        res.json(upbook);
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

exports.deletebook=async(req,res)=>{
    try{
        const delbook=await bookschema.findByIdAndDelete(req.params.id);
        if(!delbook){
            res.status(404).json({
                message:"Book Not Found"
            });
        }
        res.json({
            message:"Book deleted Successfully"
        })

    }
    catch(error){
        res.json({
            message:"Internal Server Error"
        })
    }
}