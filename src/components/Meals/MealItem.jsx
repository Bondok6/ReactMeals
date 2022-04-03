import classes from './MealItem.module.css';

const MealItem = ({ name, description, price }) => {
  const priceMeal = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceMeal}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
