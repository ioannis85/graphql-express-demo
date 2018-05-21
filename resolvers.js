import authorModel from './models/author';

const resolvers = {
  Query:{
    authors : (root, args) => authorModel.find({}, args ),
    author:(root,args)=> authorModel.findOne({ id: args.id })
  },
  Mutation:{
    addAuthor :(root, {name, age, books })=> {
      const author = new authorModel({ name, age, books });
      author.save();
      return { name, age ,books };
    },
    deleteAuthor : (root, { id })=>{
      return authorModel.findOneAndRemove({id});
    }
  }
};

export default resolvers;
