import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WalletButton = () => {
  return (
    <div>
      <img
        src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif"
        alt="emoji"
      />

      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );
};

export default WalletButton;
