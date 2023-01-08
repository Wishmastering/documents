// Este import se me rompe, pendiente
// import img from "../../../public/carlosTest.png"

export default function StudentId(){
    return<>
        <div className="id-container">
            {/* Esta es la parte top del Student ID */}
            <div className="top-section">
                <h1>4Geeks</h1> 
                <h1 className="student-background"> 👨‍💻 Student</h1>
            </div>

            {/* Esta es la parte mid del Student ID */}
            <div className="mid-section">
                <div>
                    <img src="../../../public/carlosTest.png" alt="Stock Image For A Student Here"></img>
                </div>
                <div>
                    <h1> <span> &lt; </span>Roberto Moreno<span> &gt;</span></h1>
                    <h2> ID: 123456</h2>
                    <p> 1801 SW Third Ave, Unit 100, Miami, FL 33129, United States </p>
                </div>    
            </div> 

            {/* Esta es la parte bottom del Student ID */}
            <div className="bottom-section">
                <div>
                    <span className="thin-bar"></span>
                    <span className="fat-bar"></span>
                    <span className="thin-bar"></span>
                    <span className="fat-bar"></span>
                    <span className="thin-bar"></span>
                    <span className="fat-bar"></span>
                    <span className="fat-bar"></span>
                    <span className="fat-bar"></span>
                    <span className="thin-bar"></span>
                    <span className="thin-bar"></span>
                    <span className="fat-bar"></span>
                    <span className="thin-bar"></span>
                    <span className="fat-bar"></span>
                    <span className="fat-bar"></span>
                    <span className="fat-bar"></span>
                    <span className="thin-bar"></span>
                </div>
                <p>Valid Until <strong> 12/2023</strong></p>
            </div>
            

        </div>
    </>

}