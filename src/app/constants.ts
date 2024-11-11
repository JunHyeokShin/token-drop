import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { client } from "./client";

export const contractAddress = "0x6E0222b7d925aFC074eF69E392E4d0c3f1E275A3";

export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});
