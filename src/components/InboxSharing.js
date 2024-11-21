// src/components/InboxSharing.js
//import Image from 'next/image';
import styles from './InboxSharing.module.css';

const InboxSharing = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.emailInfo}>
          <img
            src="https://www.bing.com/images/search?q=Google+Icon+Transparent+Background&FORM=IRTRRL" // Replace with actual path to Google icon
            alt="Google Icon"
            className={styles.googleIcon}
          />
          <span className={styles.email}>julian@attio.com</span>
          <button className={styles.syncStatus}>In Sync</button>
        </div>
        <p className={styles.updateText}>Update your inbox permissions and settings</p>
      </header>

      {/* Default Sharing Configuration */}
      <section className={styles.sharingConfig}>
        <h3>Default sharing configuration</h3>
        <div className={styles.sharingOption}>
          <input type="radio" name="sharing" />
          <label>
            <span>Metadata only</span>
            <p>Only subject lines will be visible to anyone on your workspace</p>
          </label>
        </div>
        <div className={styles.sharingOption}>
          <input type="radio" name="sharing" />
          <label>
            <span>Subject line and metadata</span>
            <p>We will share the subject, participants, and timestamps with anyone in your workspace</p>
          </label>
        </div>
        <div className={styles.sharingOption}>
          <input type="radio" name="sharing" checked />
          <label>
            <span>Full access <span className={styles.plusBadge}>Plus</span></span>
            <p>Everything is shared with your workspace members (including the body, subject line, attachments)</p>
          </label>
        </div>
      </section>

      {/* Individual Inbox Sharing */}
      <section className={styles.inboxSharing}>
        <h3>Individual inbox sharing</h3>
        <div className={styles.user}>
          <span className={styles.avatar}>J</span>
          <p className={styles.userName}>Jeremy Enderson</p>
          <select className={styles.accessLevel}>
            <option>Full access</option>
            <option>Metadata only</option>
          </select>
          <button className={styles.shareButton}>Share access</button>
        </div>
        <div className={styles.user}>
          <span className={styles.avatar}>N</span>
          <p className={styles.userName}>Nick Sharp</p>
          <p className={styles.userEmail}>nick@attio.com</p>
          <select className={styles.accessLevel}>
            <option>Full access</option>
            <option>Metadata only</option>
          </select>
        </div>
        <div className={styles.user}>
          <span className={styles.avatar}>A</span>
          <p className={styles.userName}>Alex Christie</p>
          <p className={styles.userEmail}>alex@attio.com</p>
          <select className={styles.accessLevel}>
            <option>Metadata only</option>
            <option>Full access</option>
          </select>
        </div>
      </section>
    </div>
  );
};

export default InboxSharing;
