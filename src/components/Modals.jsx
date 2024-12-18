import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const Modals = (props) => {
    let {productList}=props;
	let totalQuantity = productList?.reduce((accumulator, currentValue) => {
		return accumulator+(currentValue?.quantity || 0);
	},0);

	 
	let totalPrice = productList?.reduce((accumulator, currentValue) => {
		return accumulator+(Number(currentValue?.price*currentValue.quantity) || 0);
	},0);
	
    return (
		<div style={{width:'650px'}}>
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				
				<div style={{padding:'44px'}}>
				<h1 style={{
					fontSize: '22px',
					fontWeight: '700',
					lineHeight: '24px'
					}}>Your Cart</h1>
					<div style={{borderBottom:'1px solid #DBDFEA',color:'#8091A7'}}>
						
						<div className='d-flex'>
							<div style={{padding:'0px', margin:'0',width: "394px",display:"flex"}}>			
								<span id="title-name">Title</span>
						</div>
						<div class="middle-item d-flex">
							<ul style={{padding:'0px' ,width: '86px',textAlign: 'center'}}>Color</ul>
							<ul style={{padding:'0px',width: "96px", textAlign: "center"}}>Size</ul>
							<ul style={{padding:'0px',width: "82px", textAlign: "center"}}>Quantity</ul>
						</div>
						<div style={{padding:'0px' ,width: "127px", textAlign:"end", fontWeight: "700"}}/>Price</div>
					</div>
					<div style={{marginBottom:'16px', marginTop:'16px'}}>{productList &&
						productList.map((item,index) => {
							return (
								<div key={index} className='d-flex align-items-center' style={{marginBottom:'16px', paddingBottom:'16px',borderBottom:'1px solid #DBDFEA'}}>
									<div style={{width: "340px",display:"flex",alignItems:'center', gap:'8px'}}>
										<img
											src={item.image}
											alt={`${item.title}`}
											style={{height: "42px", width: "37px"}}
										/>
										<span id="title-name">{item.title}</span>
									</div>
									<div className="middle-item d-flex justify-content-center">
										<ul style={{padding:'0px',width: '86px',textAlign: 'center'}}>{item.color}</ul>
										<ul style={{padding:'0px',width: "96px", textAlign: "center",fontWeight: "700"}}>{item.size}</ul>
										<ul style={{padding:'0px',width: "82px", textAlign: "center", fontWeight: "700"}}>{
											item.quantity
										}</ul>
									</div>
									<div style={{width: "140px", textAlign:"end", fontWeight: "700"}}>${
										item.price * item.quantity
										}.00
									</div>
								</div>
							);
						})}
					</div>
					<div style={{display:'flex', fontWeight: "700"}}>
						<ul style={{padding:'0px',width: "550px"}}>Total</ul>
						<ul style={{padding:'0px',width: "82px", textAlign: "center"}}>{totalQuantity}</ul>
						<ul style={{width: "140px", textAlign:"end", }}>${totalPrice}.00</ul>
					</div>
					<div className='d-flex justify-content-end' style={{gap:'24px'}}>
						<Button style={{backgroundColor:'white',color:'black',border:'1px solid #DBDFEA'}}>Continue Shopping</Button>
						<Button>Checkout</Button>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default Modals
