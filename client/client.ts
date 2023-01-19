// Client code...
//console.log(pg.PROGRAM_ID.toString());

// Get latest blockhash info
const blockhashInfo = await pg.connection.getLatestBlockhash();

// Create transaction
const tx = new web3.Transaction({
  ...blockhashInfo,
});

// Add our hello world program instruction
tx.add(
  new web3.TransactionInstruction({
    programId: pg.PROGRAM_ID,
    keys: [],
    data: Buffer.from([]),
  })
);

// Sign transaction
tx.sign(pg.wallet.keypair);

// Send the transaction to the Solana cluster
const txHash = await pg.connection.sendRawTransaction(tx.serialize());
console.log(txHash);

//5NufGvLsd3YFfvijWJsWjhJEXzgUuRA53RAgchHU1JyktMcSShTskfGFSeMVoQobm5jgHWUVHhQmDjJkS4Ld5xBB



//Alternative
/*
const programId = new web3.PublicKey(
  "REPLACE_WITH_YOUR_PROGRAM_ID"
);

async function sayHello(
  payer: web3.Keypair
): Promise<web3.TransactionSignature> {
  const transaction = new web3.Transaction();

  const instruction = new web3.TransactionInstruction({
    keys: [], // We're not using any accounts yet
    programId,
    // No need to add data here!
  });

  transaction.add(instruction);

  const transactionSignature = await web3.sendAndConfirmTransaction(
    pg.connection,
    transaction,
    [payer]
  );

  return transactionSignature;
}

async function main() {
  const transactionSignature = await sayHello(pg.wallet.keypair);

  console.log(
    `Transaction: https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`
  );
}

main();
*/