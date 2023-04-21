import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Karamadai, Coimbatore, India',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: '727721euec183@skcet.ac.in',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+91 8675679592',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
<div className="w-full lg:w-1/2">
			<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" id="contact" >
				<h1 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h1>
				<ul className="font-general-regular" id="li">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;