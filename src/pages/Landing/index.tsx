import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/Downloads Dia 01/images/logo.svg'
import LandingImg from '../../assets/images/Downloads Dia 01/images/landing.svg'
import study from '../../assets/images/Downloads Dia 01/images/icons/study.svg'
import GiveClasses from '../../assets/images/Downloads Dia 01/images/icons/give-classes.svg'
import PurpleHeater from '../../assets/images/Downloads Dia 01/images/icons/purple-heart.svg'
import './style.css'

export default function Landing() {
	return(
		<div id="page-Landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={Logo} alt="proffy"/>
					<h2>Sua platafoma de estudos online</h2>
				</div>
				
				<img src={LandingImg} 
				alt="platafoma de estudos" 
				className="hero-img"
				/>

				<div className="button-container">
					<Link to="study" className="study">
						<img src={study} alt="Estudar"/>
						Estudar
					</Link>

					<Link to="/give-classes" className="give-classes">
						<img src={GiveClasses} alt="Estudar"/>
						Dar Aulas
					</Link>
				</div>

				<span className="total-connections">
					Total de 200 conexões realizadas 
					<img src={PurpleHeater} alt="purple"/>
				</span>
			</div>
		</div>
	)
}