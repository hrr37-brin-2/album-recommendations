let id = 9900890;

module.exports.getID = (context, events, done) => {
  id++;
  context.vars.ID = id;
  return done();
};