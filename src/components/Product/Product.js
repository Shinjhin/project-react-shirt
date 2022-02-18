import styles from './Product.module.scss';
import PropTypes from 'prop-types'
import { useState , useMemo} from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';

const Product = props => {

const [currentColor, setCurrentColor] = useState(props.colors[0])
// console.log('colors:',currentColor)
const [currentSize, setCurrentSize] = useState(props.sizes[0].name)
// console.log('setSize',currentSize);
const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()] 
};

const getPrice = useMemo(() =>{
  const suma = props.sizes.find( ({ name }) => name === currentSize)
  return props.basePrice + suma.additionalPrice
}, [props.sizes, props.basePrice, currentSize]);

const hundleSubmit = (e) => {
  e.preventDefault()
  console.log('Name:', props.title);
  console.log('Price:', getPrice);
  console.log('Size:', currentSize);
  console.log('Color:', currentColor);
}

  return (
    <article className={styles.product}>
      {/*<div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`} />
        </div>*/}
      <ProductImage title={props.title} name={props.name} currentColor={currentColor}/>  
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm 
          sizes={props.sizes}
          colors={props.colors}
          hundleSubmit={hundleSubmit}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          prepareColorClassName={prepareColorClassName}
          getPrice={getPrice}
       />
      </div>
    </article>
  )
};

Product.propTypes = {
  id:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  basePrice:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
};

export default Product;

  /*
  <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => 
                <li key={size.name}>
                  <button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={e => setCurrentSize(size.name) }>{size.name}</button>
                </li>  
              )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color =>
                <li key={color}>
                  <button type="button" className={clsx(prepareColorClassName(color), color === props.color && styles.active)} onClick={e => setCurrentColor ( color )} />
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
       */ 