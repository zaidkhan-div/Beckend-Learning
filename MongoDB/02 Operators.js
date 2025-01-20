// Less than/Greater than/ Less than or Eq/Greater than or Eq
db.comments.find({ member_since: { $lt: 90 } });
db.comments.find({ member_since: { $lte: 90 } });
db.comments.find({ member_since: { $gt: 90 } });
db.comments.find({ member_since: { $gte: 90 } });