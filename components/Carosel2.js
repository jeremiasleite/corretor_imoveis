var React = require('react');
var Carousel = require('react-responsive-carousel').Carousel;

const DemoCarousel = (props) => {
    
    return (
        <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <div>
                <img src="https://s2.glbimg.com/QFdbasr_0s0tomnEaP_TqevT_Lg=/620x413/e.glbimg.com/og/ed/f/original/2019/03/30/f_.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://quatrorodas.abril.com.br/wp-content/uploads/2019/03/ferrari-gtc4lusso.jpg?quality=70&strip=info" />
                <p className="legend">Legend 2</p>
            </div>
            
        </Carousel>
    );

};

export default DemoCarousel;