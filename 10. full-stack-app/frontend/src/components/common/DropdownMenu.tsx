import { Link } from "react-router-dom";
import styles from "./DropdownMenu.module.scss";

interface DropdownMenuProps {
  onLogout: () => void;
}

const DropdownMenu = ({ onLogout }: DropdownMenuProps) => {
  return (
    <div className={styles.dropdownMenu}>
      <Link to="/account" className={styles.dropdownItem}>
        My Account
      </Link>
      <Link to="/bookings" className={styles.dropdownItem}>
        My Bookings
      </Link>
      <button className={styles.dropdownItem} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default DropdownMenu;
