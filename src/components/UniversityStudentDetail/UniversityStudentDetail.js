import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import universityStudentData from '../../universityStudentData/universityStudentData.json';
import './UniversityStudentDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin,  faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faMapMarker, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const UniversityStudentDetail = () => {
    const { nickname } = useParams();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(universityStudentData);
    }, []);

    const student = students.filter(s => s.nickname === nickname);
   
    return (
        <section className="main-content">
		<div className="container">
			<div className="row">
				<div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
					<div className="profile-card card rounded-lg shadow p-4 p-xl-5 mb-4 text-center position-relative overflow-hidden">
						<div className="banner"></div>
						<img src={student[0]?.img} alt={nickname} className="img-circle mx-auto mb-3"/>
						<h3 className="mb-4">{student[0]?.name}</h3>
						<div className="mb-4" style={{textAlign: 'left'}}>
							<p className="mb-2"><FontAwesomeIcon icon={faEnvelope} size="1x"/> {student[0]?.email}</p>
							<p className="mb-2"><FontAwesomeIcon icon={faPhoneVolume} size="1x"/> {student[0]?.phone}</p>
							<p className="mb-2"><FontAwesomeIcon icon={faGlobe}/> {student[0]?.website}</p>
							<p className="mb-2"><FontAwesomeIcon icon={faMapMarker}/> {student[0]?.university}</p>
						</div>
						<div className="social-links d-flex justify-content-center">
							<a href={student[0]?.facebook} className="mx-3"><FontAwesomeIcon icon={faFacebookF} size="2x"/></a>
							<a href="https://www.linkedin.com/in/codermojnu/" className="mx-3"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
							<a href="https://www.youtube.com/channel/UCOHvhP3ohRkJjchdkb9Viww" className="mx-3" style={{color: '#F70000'}}><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>
    );
};

export default UniversityStudentDetail;