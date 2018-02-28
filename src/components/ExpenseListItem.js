import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <li><Link to={`/edit/${id}`}>{ description }</Link> @ { createdAt } - { amount } cents</li>
);

export default ExpenseListItem;