import clsx from "clsx";
import styles from '../Product.module.scss';
import Button from "./Button/Button";

const ProductForm = props => {
  return(
    <form onSubmit={props.hundleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => 
                <li key={size.name}>
                  <button type="button" className={clsx(size.name === props.currentSize && styles.active)} onClick={e => props.setCurrentSize(size.name) }>{size.name}</button>
                </li>  
              )}
              
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color =>
                <li key={color}>
                  <button type="button" className={clsx(props.prepareColorClassName(color), color === props.color && styles.active)} onClick={e => props.setCurrentColor ( color )} />
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>

  )
}

export default ProductForm;