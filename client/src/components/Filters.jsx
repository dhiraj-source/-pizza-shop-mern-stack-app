import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";
import {FaSearch} from 'react-icons/fa'


const Filters = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-warning mt-4" >
      <Form>
        <Row>
          <Col>
            <Form.Control
              value={searchkey}
              onChange={(e) => setsearchkey(e.target.value)}
              placeholder="e.g. pepperoni"
            />
          </Col>
          <Col>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
            >
              <option>All</option>
              <option>veg</option>
              <option>nonveg</option>
            </select>
          </Col>
          <Col>
            <Button
              onClick={() => {
                dispatch(filterPizza(searchkey, category));
              }}
            >
            <FaSearch style={{marginRight:'5px'}}/>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default Filters;
