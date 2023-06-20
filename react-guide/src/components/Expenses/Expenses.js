import React,{useState} from "react";
import './Expenses.css'
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState('2020')
   const yearChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear)
   }

   const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
   })
   let expensesContent = <p>No expenses found.</p>;
   if (filteredExpenses.length > 0) {
      expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
    }
   return (
      <div>
         
    
         <Card className="expenses">
         <ExpensesFilter selected={filteredYear} onChangeFilter={yearChangeHandler}/>
         {expensesContent}
            <ExpensesChart expenses = {filteredExpenses} />
         </Card>  
   </div>    
   )
}

export default Expenses