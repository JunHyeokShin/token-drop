import { client } from "@/app/client";
import { CONTRACT } from "@/app/constants";
import { formatNumber } from "@/lib/utils";
import { getContractMetadata } from "thirdweb/extensions/common";
import { totalSupply } from "thirdweb/extensions/erc20";
import { MediaRenderer } from "thirdweb/react";

export default async function TokenInfo() {
  const contractMetadata = await getContractMetadata({ contract: CONTRACT });

  return (
    <div className="mt-4 text-gray-800 p-4 rounded-md bg-slate-300">
      <MediaRenderer
        client={client}
        src={contractMetadata.image}
        width="150"
        height="150"
      />
      <h1 className="text-2xl font-bold mb-2">Token Info</h1>
      <p>Name: {contractMetadata.name}</p>
      <p>Symbol: {contractMetadata.symbol}</p>
      <p>Description: {contractMetadata.description}</p>
    </div>
  );
}
