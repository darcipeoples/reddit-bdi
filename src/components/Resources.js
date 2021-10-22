import React, { Component } from 'react';
import '../App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class Resources extends Component {
    render () {
        if (this.props.currPage !== "Resources") {
            return <></>
        } 

        return (
            <>
            <h1>Resources</h1>
            <div className="pb-4"> <i> Sourced from <a href="https://csmhcillinois.com" target="_blank" rel="noreferrer"> https://csmhcillinois.com </a> </i> </div>
            <Tabs defaultActiveKey="home" id="noanim-tab-example">
            <Tab className="resource-tab" eventKey="home" title="Mental Health (General)">
                <h2 className="pb-2"> General Mental Health Resources</h2>
                <div> <h4> National Suicide Prevention Lifeline</h4>
                    <div> Call <a href="tel:800-273-8255">800-273-TALK (8255)</a> to speak with a trained crisis counselor. </div>
                </div>
                <div> <br /> <h4> Crisis Text Line</h4>
                    <div> Text 741-741 to connect with a trained crisis counselor to receive crisis support via text message. </div>
                </div>
                <div> <br /> <h4> Champaign-Urbana Crisis Line</h4>
                    <div> This is similar to the national crisis line but specifically for those in the local area. This one is
                        especially useful in that a crisis counselor can help you access local resources or help. </div>
                    <div> Phone: <a href="tel:217-359-4141">(217) 359-4141</a> </div>
                </div>
                <div>
                    <div> You can also call <a href="tel:911">911</a> if the crisis is a <b>life-threatening emergency</b>. Make
                        sure to notify the operator that it is a psychiatric emergency and ask for an officer trained in crisis
                        intervention or trained to assist people experiencing a psychiatric emergency. </div>
                </div>
                <div> <br /> <h4> National Domestic Violence Hotline</h4>
                    <div> Call <a href="tel:800-799-7233">800-799-SAFE (7233)</a> to speak with trained experts who provide
                        confidential support to anyone experiencing domestic violence or seeking resources and information. </div>
                </div>
                <div> <br /> <h4> Disaster Distress Helpline</h4>
                    <div> Call <a href="tel:1-800-985-5990">1-800-985-5990</a> or text “TalkWithUs” to 66746. The disaster distress
                        helpline provides immediate crisis counseling for people who are experiencing emotional distress related to
                        any natural or human-caused disaster. The helpline is free, multilingual, confidential, and available 24
                        hours a day, seven days a week. </div>
                </div>
                <div> <br /> <h4> Rosecrance Substance/Mental Health Helpline</h4>
                    <div> Call <a href="tel:1-866-330-8729">1-866-330-8729</a> . This group does mental health triage at hospitals
                        and offers partial hospitalization, mental health recovery services, and recovery living. They also have
                        substance abuse centers (with one located in Champaign). </div>
                    <div> Website: <a href="https://rosecrance.org" target="_blank" rel="noreferrer">https://rosecrance.org</a> </div>
                </div>
                <div> <br /> <h4> Social Media Support</h4>
                    <div> If you are worried about someone on social media, you can contact the safety team on various social media
                        sites (Facebook, Twitter, Instagram, Snapchat, YouTube, and Periscope) to ensure that they are connected
                        with the help they need Support on Social Media. </div>
                </div>
                <div> <br /> <h4> Illinois WarmLine</h4>
                    <div> Website: <a href="http://illinoismentalhealthcollaborative.com" target="_blank" rel="noreferrer">
                            http://illinoismentalhealthcollaborative.com </a> </div>
                    <div> Phone: <a href="tel:866-359-7953"> (866) 359-7953 </a> </div>
                </div>
            </Tab>
            <Tab className="resource-tab" eventKey="profile" title="Mental Health (UIUC)">
            <h2 className="pb-2"> UIUC Mental Health Resources</h2>
                <div> <h4> Dean of Students Office</h4>
                    <div> A catch-all for general issues. Reach out to them for helping you advocate for yourself with staff,
                        faculty, students, and other organizations on campus. </div>
                    <div> Website: <a href="https://odos.illinois.edu/" target="_blank" rel="noreferrer"> https://odos.illinois.edu/ </a> </div>
                </div>
                <div> <br /> <h4> Counseling Center</h4>
                    <div> The UIUC Counseling Center is committed to providing a range of resources intended to help students
                        develop improved coping skills to address emotional, interpersonal, and academic concerns </div>
                    <div> Website: <a href="https://www.counselingcenter.illinois.edu/" target="_blank" rel="noreferrer">
                            https://www.counselingcenter.illinois.edu/ </a> </div>
                </div>
                <div> <br /> <h4> Telehelp</h4>
                    <div> Online counseling for students with United Healthcare </div>
                    <div> Website: <a href="http://telehelp4students.com" target="_blank" rel="noreferrer"> http://telehelp4students.com </a> </div>
                </div>
                <div> <br /> <h4> UIUC Psych Department’s List of Covid-19 Mental Health Resources</h4>
                    <div> <a href="https://docs.google.com/document/d/1-TafDvSzmPdyxWhrbxOjLxDgFNlzHaQlX6cCKC3dcKU/edit#heading=h.bnwfewihv1z3"
                            target="_blank" rel="noreferrer"> COVID-19 Mental Health Resources - Google Docs </a> </div>
                </div>
                <div> <br /> <h4> McKinley Health Center Mental Health</h4>
                    <div> Website: <a href="https://mckinley.illinois.edu/medical-services/mental-health" target="_blank" rel="noreferrer">
                            https://mckinley.illinois.edu/medical-services/mental-health </a> </div>
                    <div> Appointments (schedule by phone): <a href="tel:217-333-2701"> (217) 333-2701 </a> </div>
                    <div> Emergency: <a href="tel:217-359-4141"> (217) 359-4141 </a> </div>
                </div>
                <div> <br /> <h4> Psychological Services Center</h4>
                    <div> Website: <a href="http://psc.illinois.edu/" target="_blank" rel="noreferrer"> http://psc.illinois.edu/ </a> </div>
                    <div> Phone: <a href="tel:217-333-0041"> (217) 333-0041 </a> </div>
                </div>
                <div> <br /> <h4> Campus Well-Being Services</h4>
                    <div> Website: <a href="http://humanresources.illinois.edu/campus-wellbeing-services/about.html"
                            target="_blank" rel="noreferrer"> http://humanresources.illinois.edu/campus-wellbeing-services/about.html </a> </div>
                    <div> Phone: <a href="tel:217-265-9355"> (217) 265-9355 </a> </div>
                </div>
                <div> <br /> <h4> College of Engineering Embedded Counselor: Juvenal George</h4>
                    <div> Contact: <a href="mailto:juvegeor@illinois.edu"> juvegeor@illinois.edu </a> </div>
                </div>
                <div> <br /> <h4> College of LAS Embedded Counselor: Andy Novinska</h4>
                    <div> Contact: <a href="mailto:anovinsk@illinois.edu"> anovinsk@illinois.edu </a> </div>
                </div>
                <div> <br /> <h4> Full List of embedded counselors</h4>
                    <div> Website: <a href="https://counselingcenter.illinois.edu/about-us/embedded-counselors" target="_blank" rel="noreferrer">
                            https://counselingcenter.illinois.edu/about-us/embedded-counselors </a> </div>
                </div>
                <div> <br /> <h4> College of Engineering Weekly DRES Office Hour</h4>
                    <div> Counselor: Rachel Green, DRES </div>
                    <div>Wednesdays, 3:30-4:30 pm (30-minute appointments) in 206 Engineering Hall</div>
                    <div> Appointments: To schedule an appointment, contact Kyra Lochelle at <a href="mailto:lochelle@illinois.edu">
                            lochelle@illinois.edu </a> </div>
                </div>
                <div> <br /> <h4> UIUC Disability Resources and Educational Services</h4>
                    <div> Website: <a href="https://www.disability.illinois.edu/" target="_blank" rel="noreferrer">
                            https://www.disability.illinois.edu/ </a> </div>
                </div>
            </Tab>
            <Tab className="resource-tab" eventKey="contact" title="Sexual Assault">
                <h2 className="pb-2"> Sexual Assault Resources</h2>
                <div> <h4> Women’s Resource Center</h4>
                    <div> A completely no-strings-attached*, anonymous resource center for women with a wide variety of resources.
                    </div>
                    <div> Website: <a href="https://www.oiir.illinois.edu/womens-center" target="_blank" rel="noreferrer">
                            https://www.oiir.illinois.edu/womens-center </a> </div>
                    <div> *The WRC has 4 confidential advisors not mandated to report to the Title IX office. Pursuing
                        accountability/safety options requires a report to the Title IX Coordinator in a survivor-led,
                        well-informed, guided manner. More info at <a href="https://wecare.illinois.edu/faq/employees/"
                            target="_blank" rel="noreferrer"> FAQs about Employee Reporting Obligations, At Illinois We Care </a> and at <a
                            href="https://wecare.illinois.edu/policies/terms/#advisor" target="_blank" rel="noreferrer"> Policy Definitions &amp; Key
                            Terms, At Illinois We Care </a> </div>
                </div>
                <div> <br /> <h4> National Sexual Assault Hotline</h4>
                    <div> Call <a href="tel:800-656-4673"> 800-656-HOPE (4673) </a> to connect with a trained staff member from a
                        sexual assault service provider in your area that offers access to a range of free services. Crisis chat
                        support is also available at Online Hotline. </div>
                </div>
            </Tab>
            <Tab className="resource-tab" eventKey="contact2" title="Academic">
            <h2 className="pb-2"> Academic Resources</h2>
                <div> <h4> Computer Science Undergraduate Advising</h4>
                    <div> Website: <a href="https://cs.illinois.edu/academics/undergraduate/undergraduate-advising" target="_blank" rel="noreferrer">
                            https://cs.illinois.edu/academics/undergraduate/undergraduate-advising </a> </div>
                    <div> Phone: <a href="tel:217-333-4428"> (217) 333-4428 </a> </div>
                </div>
                <div> <br /> <h4> UIUC Disability Resources and Educational Services</h4>
                    <div> Website: <a href="https://www.disability.illinois.edu/" target="_blank" rel="noreferrer">
                            https://www.disability.illinois.edu/ </a> </div>
                </div>
                <div> <br /> <h4> Grainger CARE (Center for Academic Resources In Engineering)</h4>
                    <div> Website: <a href="https://students.grainger.illinois.edu/care/home/" target="_blank" rel="noreferrer">
                            https://students.grainger.illinois.edu/care/home/ </a> </div>
                    <div> Phone: <a href="tel:217-244-2678"> (217) 244-2678 </a> </div>
                    <div> Email: <a href="mailto:engr-care@illinois.edu"> engr-care@illinois.edu </a> </div>
                </div>
            </Tab>
            </Tabs>
            </>
        )
    }
}

export default Resources;