import * as tf from "@tensorflow/tfjs";
import { useEffect, useState } from "react";
import utilStyles from "../styles/utils.module.css";

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
// this doesnt work
//require("@tensorflow/tfjs-node");

export default function TfModel() {
  const [trainedModel, setTrainedModel] = useState(null);
  // A sequential model is a container which you can add layers to.
  const model = tf.sequential();

  // Add a dense layer with 1 output unit.
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  // Specify the loss type and optimizer for training.
  model.compile({ loss: "meanSquaredError", optimizer: "SGD" });

  // Generate some synthetic data for training.
  const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
  const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);

  // Train the model.

  useEffect(() => {
    const trainModel = async () => {
      await model.fit(xs, ys, { epochs: 500 });
      setTrainedModel(model.predict(tf.tensor2d([[5]], [1, 1])));
      console.log(trainedModel);
    };
    trainModel();
  }, []);

  return (
    <h1 className={utilStyles.headingmd}>
      {trainedModel
        ? `Prediction ${trainedModel.dataSync()}`
        : "Loading model data..."}
    </h1>
  );
}
