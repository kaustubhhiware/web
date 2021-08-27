import React from "react";
import './timeline.css';
import PossiblyEmptyLink from "./possiblyEmptyLink";
import { Row, Col } from 'react-bootstrap';


export class Timeline extends React.Component {
  /*
  When
  Role => Title / TitleLink
  TitleSupplementaryLinks - array of links
  Company => Subtitle
  Description (list) / DescriptionLine
  */
  render() {
    var supplements = this.props.TitleSupplementaryLinks || [];
    return (
      <div className="timeline-item">
        <span className="duration">
          {this.props.When}
        </span>
        <Row className="timeline-content">
          <Col md={12} lg={11}>
            <div className="timeline-title">
              <PossiblyEmptyLink
                text={this.props.Title}
                href={this.props.TitleLink}
                alt_text={this.props.Title} />
              
              {supplements.map( (supplement, index) => (
                <PossiblyEmptyLink
                  text={supplement.text}
                  href={supplement.link}
                  alt_text=""
                  key={index} />
              ))}
            </div>

            <div className="timeline-subtitle">
              <PossiblyEmptyLink
                text={this.props.Subtitle}
                href={this.props.SubtitleLink}
                alt_text={this.props.Subtitle} />
            </div>

            <ul className="timeline-description">
              {this.props.Description.map((line) => (
                <li className="timeline-list-item" key={line}>
                  {line}
                </li>
              ))}
            </ul>

          {/*
            Only one of Description (array of strings)
            or DescriptionLine should be used.
          */}
            <p className="timeline-description">
              {this.props.DescriptionLine}
            </p>
          </Col>
          <Col md={2} lg={1}>
            <img src={this.props.Logo} className="timeline-img" alt=""/>
          </Col>
        </Row>
      </div>
    );
  }
}

  export default Timeline;