import React from 'react'
import { connect } from 'react-redux'

const AdminFaq = ({ getAdminClients, clients, goPage }) => {

	return (
		<div className='admin-dashboard'>
			<div className='row admin-header align-items-center py-2'>
				<div className='col-md-12 py-2'>
					<div className='d-flex flex-row'>
						<div className='logo py-2'>FAQs / Questions</div>
					</div>
				</div>
			</div>

			<div className='row'>
				<div className='col-md-12'>
					<div className='box-shadow p-3 m-1 mb-3 position-relative rounded-lg'>
						<div className='m-2'>
							<p className='text-left font-weight-bold mb-2'>Why is visiting the dentist so important?</p>
							<p className='text-left mb-1'>Visiting the dentist regularly will not only help keep your teeth and mouth healthy, but will also help keep the rest of your body healthy. Dental care is important because it:</p>
							<ul>
								<li>Helps prevent tooth decay</li>
								<li>Protects against periodontal (gum) disease, which can lead to tooth and bone loss</li>
								<li>Prevents bad breath - brushing, flossing, and seeing the dentist regularly will help reduce the amount of bacteria in  your mouth that causes bad breath</li>
								<li>Gives you a more attractive smile and increases your self-confidence</li>
								<li>Helps keep teeth looking bright by preventing them from becoming stained by food, drinks, and tobacco</li>
								<li>Strengthens your teeth so that you can enjoy healthy, beautiful smiles for the rest of your life!</li>
							</ul>
						</div>
						<div className='m-2'>
							<p className='text-left font-weight-bold mb-2'>At what age should I start taking my child to see the dentist?</p>
							<p className='text-left mb-1'>The American Academy of Pediatric Dentistry (AAPD) recommends that children first see a dentist as early as six months of age and no later than one year of age. During this time, your child's baby teeth will be coming in and your dentist can examine the health of your child's first few teeth. After the first visit, be sure to schedule regular checkups every six months.</p>
						</div>
						<div className='m-2'>
							<p className='text-left font-weight-bold mb-2'>At what age should I start taking my child to see the dentist?</p>
							<p className='text-left mb-1'>The American Academy of Pediatric Dentistry (AAPD) recommends that children first see a dentist as early as six months of age and no later than one year of age. During this time, your child's baby teeth will be coming in and your dentist can examine the health of your child's first few teeth. After the first visit, be sure to schedule regular checkups every six months.</p>
						</div>
						<div className='m-2'>
							<p className='text-left font-weight-bold mb-2'>At what age should I start taking my child to see the dentist?</p>
							<p className='text-left mb-1'>The American Academy of Pediatric Dentistry (AAPD) recommends that children first see a dentist as early as six months of age and no later than one year of age. During this time, your child's baby teeth will be coming in and your dentist can examine the health of your child's first few teeth. After the first visit, be sure to schedule regular checkups every six months.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	// clients: state.admin.clients
})

export default connect(mapStateToProps, {})(AdminFaq)