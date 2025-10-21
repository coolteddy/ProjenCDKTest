# Projen CDK TypeScript App

## Setup and Deployment Steps

1. **Install dependencies**
   ```sh
   npx projen install
   ```

2. **Review and customize project settings**
   - Edit `.projenrc.ts` as needed.

3. **Synthesize the CDK app**
   ```sh
   npx projen synth
   ```

4. **Bootstrap your AWS environment** (if not done before)
   ```sh
   cdk bootstrap
   ```

5. **Add AWS resources to your stack**
   - Edit `src/<project>-stack.ts` to define resources.

6. **Deploy your stack**
   ```sh
   cdk deploy
   ```

---
You can run these steps even if you haven’t defined any AWS resources yet. The stack will deploy as empty and you can add resources later.