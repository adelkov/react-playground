import React, {Component} from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';



class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            email: localStorage.getItem('email'),
            errors: {},
            editing: false
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    onSubmit = (e) => {
        this.props.onAddPost(this.state);
        this.setState({
            title: '',
            body: ''
        })
    };

    handleChange = (value) => {
        this.setState({ body: value })
    };


    render() {

        const modules = {
                toolbar: [
                    [{ 'header': [1, 2, false] }],
                    ['bold', 'italic', 'underline','strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image'],
                    ['clean']
                ],
            };

        return (
            <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                    <h4 className="card-title">Add new post...</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg w-25 bg-light"
                            id="inputmailinline"
                            placeholder="Post title"
                            required="required"
                            value={this.state.title}
                            onChange={this.onChange}
                            name="title" />
                    </div>
                    <ReactQuill
                        onFocus={this.toggleEditStatus}
                        onBlur={this.toggleEditStatus}
                        modules={modules}
                        placeholder="Your post comes here..."
                        theme="snow"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleChange}
                    />
                    <a className="btn btn-primary mt-1" onClick={this.onSubmit}>Publish</a>
                </div>
            </div>
        );
    }
}
AddPost.propTypes = {};

export default AddPost;


