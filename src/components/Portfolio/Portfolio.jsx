import styles from "./Portfolio.module.css";
import React from "react";
import cabin from "../../imgs/cabin.png";
import cake from "../../imgs/cake.png";
import circus from "../../imgs/circus.png";
import game from "../../imgs/game.png";
import safe from "../../imgs/safe.png";
import submarine from "../../imgs/submarine.png";
import $ from "jquery";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

export default function Portfolio() {
  let portData = [
    { title: "LOG CABIN", image: cabin },
    { title: "TASTY CAKE", image: cake },
    { title: "CIRCUS TENT", image: circus },
    { title: "CONTROLLER", image: game },
    { title: "LOCKED SAFE", image: safe },
    { title: "SUBMARINE", image: submarine },
  ];

  function getIndex(index) {
    let portIndex = portData[index];
    $("#modalTitle").html(portIndex.title);
    $("#modalImg").attr("src", portIndex.image);
  }

  return (
    <>
      <section className={`${styles.portBg} text-center py-5`}>
        <h2>PORTFOLIO</h2>
        <HorizontalLine bg='#2c3e50' color='#2c3e50'/>
        <div className="container pt-5">
          <div className="row g-5">
            {portData.map((port, index) => (
              <div className={`${styles.imgHover} col-md-4`} key={index} onClick={() => getIndex(index)} >
                <div className="position-relative">
                  <img src={port.image} alt="" className="w-100 rounded-3" />
                  <div className={`${styles.overlay} rounded-3`} data-bs-toggle="modal" data-bs-target="#imageExample">
                    <i className="fa-solid fa-plus fa-4x"></i>
                  </div>
                  <div className="modal fade" id="imageExample" tablIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header border-0">
                          <button type="button" className="btn-close text-info" style={{background:"none", boxShadow:"none"}} data-bs-dismiss="modal" aria-label="Close">
                          <i class="fa-solid fa-xmark fa-2x"></i>
                          </button>
                        </div>
                        <div className="modal-body text-center">
                          <h3 className="modal-title" id="modalTitle"></h3>
                          <HorizontalLine bg='#2c3e50' color='#2c3e50'/>
                          <img src="" alt="" id="modalImg" className="w-75 rounded-3 my-4"/>
                          <p className="mb-0">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Repellat nihil quasi illum assumenda quidem
                            corrupti velit quia sint blanditiis asperiores!
                          </p>
                        </div>
                        <div className="modal-footer border-0 d-flex justify-content-center">
                          <button type="button" className="btn btn-info text-white mb-2" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
