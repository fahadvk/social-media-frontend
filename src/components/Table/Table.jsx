/* eslint-disable react/prop-types */
import { Table as Tablecontain } from "@mantine/core";

export default function Table({ headings, rows }) {
  return (
    <Tablecontain w="lg">
      <thead>
        <tr>
          {headings.map((heading) => {
            return <th>{heading}</th>;
          })}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Tablecontain>
  );
}
