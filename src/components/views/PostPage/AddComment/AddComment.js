import React, {Component} from 'react';
import TextInput from "../../../common/TextInput/TextInput";


class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: this.props.postId,
            name: "",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            error: null
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    addComment = (e) => {
        e.preventDefault();
        const newComment = {
            postId: this.props.postId,
            name: this.state.name,
            email: this.state.email,
            body: this.state.body
        };
        this.props.createComment(newComment);

        this.setState({
            postId: this.props.postId,
            name: "",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        })
    };

    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label className="text-white">Add your comment</label>
                        <input
                            name="name"
                            value={this.state.name}
                            type="text"
                            className="form-control"
                            placeholder="Comment..."
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <button onClick={this.addComment} type="submit" className="btn btn-primary text-white">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddComment;
