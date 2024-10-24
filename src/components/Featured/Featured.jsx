import "./Featured.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Featured() {
    return (
        <div className="featured">
            <div className="featured-top">
                <h1 className="featured-title">Total Revenue</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="featured-bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5} />
                </div>
                <p className="btm-title">Total Sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">
                    Previous transactions processing. Last payments may not be included.
                </p>
                <div className="summary">
                    <div className="itm">
                        <div className="itm-title">Target</div>
                        <div className="itm-res positive">
                            <KeyboardArrowUpIcon />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="itm">
                        <div className="itm-title">Last Week</div>
                        <div className="itm-res positive">
                            <KeyboardArrowUpIcon />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="itm">
                        <div className="itm-title">Last Month</div>
                        <div className="itm-res negative">
                            <KeyboardArrowDownIcon />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};