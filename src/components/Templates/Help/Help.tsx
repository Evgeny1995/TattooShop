import React from 'react';
import Header from '../../Organisms/Header/Header.tsx';
import Footer from '../../Organisms/Footer/Footer.tsx';
import HelpNav from '../../Atoms/NestedNavigation/HelpNav/HelpNav.tsx';
import styles from './Help.module.scss';
import tattooMachineImg from '../../../assets/img/help/tatooMachineImg.png';

const Help: React.FC = () => {
   return (
      <div>
         <Header />

         <div className={styles.help_content_container}>
            <HelpNav />
            <div className={styles.help_content}>
               <h2 className={styles.help_title}>
                  Basic tools for artistic tattooing
               </h2>
               <p className={styles.help_title_description}>
                  So, you have decided to start getting an artistic tattoo. Wild
                  methods like string and pen paste, you, as a reasonable
                  person, do not are considering and realize that you will need
                  some minimum set of equipment. What should it contain? This is
                  what everyone asks novice tattoo artists at the beginning of
                  their activities. Let's try to help.
               </p>
               <h3 className={styles.help_maintenance_title}>
                  The content of the article
               </h3>
               <div className={styles.desk_border}>
                  <h4 className={styles.what_tattoo_machine_text}>
                     What is a tattoo machine
                  </h4>
                  <h5 className={styles.induction_machine_title}>
                     Induction tattoo machine - design, operating principle
                  </h5>
                  <ul className={styles.induction_machine_list}>
                     <li>
                        <a className={styles.induction_machine_item} href="">
                           Contour
                        </a>
                     </li>
                     <li>
                        <a href="" className={styles.induction_machine_item}>
                           Painting machine
                        </a>
                     </li>
                  </ul>
                  <h5 className={styles.rotary_machine_title}>
                     Rotary tattoo machine - design, operating principle
                  </h5>
                  <ul className={styles.rotary_machine_list}>
                     <li>
                        <a href="" className={styles.rotary_machine_item}>
                           Direct
                        </a>
                     </li>
                     <li className={styles.rotary_machine_item}>
                        <a href="" className={styles.rotary_machine_item}>
                           Straight walker
                        </a>
                     </li>
                     <li className={styles.rotary_machine_item}>
                        <a href="" className={styles.rotary_machine_item}>
                           Pen
                        </a>
                     </li>
                     <li className={styles.rotary_machine_item}>
                        <a href="" className={styles.rotary_machine_item}>
                           Slider
                        </a>
                     </li>
                     <li className={styles.rotary_machine_item}>
                        <a href="" className={styles.rotary_machine_item}>
                           Piston
                        </a>
                     </li>
                     <li className={styles.rotary_machine_item}>
                        <a href="" className={styles.rotary_machine_item}>
                           Yoke
                        </a>
                     </li>
                  </ul>
                  <h5 className={styles.manufacturers_tattoo_machines_title}>
                     Manufacturers of tattoo machines - why are they more
                     expensive than others?
                  </h5>
                  <ul className={styles.manufacturers_tattoo_machines_list}>
                     <li>
                        <a
                           className={styles.manufacturers_tattoo_machines_item}
                           href=""
                        >
                           Tattoo machines for beginners
                        </a>
                     </li>
                     <li className={styles.manufacturers_tattoo_machines_item}>
                        <a
                           className={styles.manufacturers_tattoo_machines_item}
                           href=""
                        >
                           Machine tattoos from builders
                        </a>
                     </li>
                     <li className={styles.manufacturers_tattoo_machines_item}>
                        <a
                           className={styles.manufacturers_tattoo_machines_item}
                           href=""
                        >
                           Tattoo machines for professionals
                        </a>
                     </li>
                  </ul>
                  <h4 className={styles.tattoo_holders_title}>
                     Tattoo holders
                  </h4>
                  <h5
                     className={styles.reusable_disposable_holders_tattoo_title}
                  >
                     Reusable and disposable tattoo holders
                  </h5>
                  <ul className={styles.tattoo_holders_list}>
                     <li>
                        <a className={styles.tattoo_holders_item} href="">
                           Reusable holders - what and how
                        </a>
                     </li>
                     <li className={styles.tattoo_holders_item}>
                        <a className={styles.tattoo_holders_item} href="">
                           Disposable holders - what and how
                        </a>
                     </li>
                  </ul>

                  <h5 className={styles.cartridges_needles_holders_title}>
                     Holders for cartridges and needles
                  </h5>
                  <ul className={styles.cartridges_needles_holders_list}>
                     <li className={styles.cartridges_needles_holders_item}>
                        <a
                           className={styles.cartridges_needles_holders_item}
                           href=""
                        >
                           Tattoo holders for classic needles
                        </a>
                     </li>
                     <li className={styles.cartridges_needles_holders_item}>
                        <a
                           className={styles.cartridges_needles_holders_item}
                           href=""
                        >
                           Tattoo holders for cartridges
                        </a>
                     </li>
                  </ul>
                  <h4 className={styles.tattoo_tips_title}>Tattoo tips</h4>
                  <h5 className={styles.tattoo_tips_types_title}>
                     Types of tattoo tips
                  </h5>
                  <ul className={styles.tattoo_tips_types_list}>
                     <li>
                        <a className={styles.tattoo_tips_types_item} href="">
                           Disposable Tattoo Tips
                        </a>
                     </li>
                     <li className={styles.tattoo_tips_types_item}>
                        <a className={styles.tattoo_tips_types_item} href="">
                           Reusable Tattoo Tips
                        </a>
                     </li>
                  </ul>
               </div>

               <h3 className={styles.tattoo_machine_what_title}>
                  What is a tattoo machine
               </h3>
               <div className={styles.tattoo_machine_what_style}>
                  <p className={styles.main_tool_text}>
                     The main tool of a tattoo artist, with which, as a rule,
                     they begin to assemble their first set of tattoo equipment.
                     Let's not change this stereotype, and let's talk about
                     cars.
                  </p>

                  <p className={styles.operating_principle_text}>
                     Machines, based on their operating principle, are divided
                     into induction and rotary. Induction, in turn, are divided
                     into liners and shaders.
                  </p>
                  <p className={styles.electrical_device_text}>
                     A tattoo machine is an electrical device that drives a
                     tattoo needle. Regardless of the type, the following
                     requirements apply to the tattoo machine:
                  </p>
                  <ul className={styles.requirements_tattoo_machine_list}>
                     <li className={styles.requirements_tattoo_machine_item}>
                        light weight - a light machine is more convenient to
                        work with;
                     </li>
                     <li className={styles.requirements_tattoo_machine_item}>
                        minimum vibrations - this type of machine makes it
                        easier to make precise drawings;
                     </li>
                     <li className={styles.requirements_tattoo_machine_item}>
                        power - piercing the skin with a frequency of several
                        tens of blows per second is not so easy;
                     </li>
                     <li className={styles.requirements_tattoo_machine_item}>
                        high-quality assembly - tattoo machines are subject to
                        considerable loads and must withstand them for a long
                        time;
                     </li>
                     <li className={styles.requirements_tattoo_machine_item}>
                        reliability - this should mean not only the tendency of
                        a particular model to break down, but the ability to
                        work for a long time without overheating and sagging
                        characteristics;
                     </li>
                     <li className={styles.requirements_tattoo_machine_item}>
                        A beautiful appearance is not as unimportant as it
                        seems.
                     </li>
                  </ul>
                  <p className={styles.manufacturing_balance_text}>
                     If you are not unfamiliar with mechanics and you understand
                     the principles of operation of simple mechanisms, then you
                     will see that the requirements are very contradictory. It
                     is easier to ensure a minimum of vibrations and maximum
                     power on a device with a larger mass, but working with a
                     heavy machine is not so easy. This also includes the
                     quality of the assembly and the design in general -
                     vibration has a destructive effect on all elements of the
                     device. Finding that balance that most tattoo artists will
                     like is the art of the manufacturer. Finding those models
                     that are easy, convenient and comfortable to work with is
                     the task of the tattoo artist.
                  </p>
                  <img
                     className={styles.tattoo_machine_img}
                     src={tattooMachineImg}
                     alt=""
                  />
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default Help;
