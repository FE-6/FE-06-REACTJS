import React, {Component} from 'react';

export class Login extends Component {
    
    render() { 
        return (
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h2>Login</h2>
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Username </label>
                                     <input type="email" className="form-control" placeholder="Masukan username anda"  required/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>   
                            </form>
                        </div>
                </div>
            </div> 
         );
    }
}
 
export default Login ;