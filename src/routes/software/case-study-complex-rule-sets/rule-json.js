export default `
// NOTE - op = operator, lhv = left-hand value, rhv = right-hand value
{
  op: 'or', // Top level operators allowed you to AND or OR all rules at this level
  rules: [
    { // A basic rule is defined by an lhv, rhv, and an op
      lhv: 'engine',
      op: 'is equal to', // Rules could have various options of operator based on the data type in the lhv
      rhv: 'V6'
      rule-set: { // Optionally you can add a nested rule that is parsed as an AND to the parent
        op: 'and',
        rules: []
      }
    },
    { // A rule group is a rule-set at the level of a single rule and can be parsed as AND or OR
      op: 'or'
      rules: [
        {
          lhv: 'color',
          op: 'is equal to',
          rhv: 'red'
        },
        {
          lhv: 'color',
          op: 'is equal to',
          rhv: 'blue'
        }
      ]
    }
  ]
}
`;