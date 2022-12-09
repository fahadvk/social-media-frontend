/* eslint-disable react/react-in-jsx-scope */
import { Box, Header, Text } from "@mantine/core";
import { Flex, Image, Button } from "@chakra-ui/react";
import "./LeftSideBar.css";

function LeftSidebar() {
  return (
    <Box
      sx={{ backgroundColor: "white", marginTop: "3rem", boxShadow: "3rem" }}
    >
      <h4 className="text-center text-base font-semibold"> Requests</h4>
      <Flex>
        <Image
          className="max-h-12 ml-1 mt-3"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAMAAABmfEh9AAABKVBMVEX////7vARChfTqQzU0qFP7tgAgePPoIQ0LoDj93KWkwfn0pKWl0qn7ugA7gvTqQDHpMh/9367/+/U1f/T+9vbvfHXqPCr+7tH+9OHpKRb+8dn915XpMTf8xAD0PA4jif4fo0YzqjqTtfhGifS1yvqOyJv4zMrylpDynJb2t7f75ub52tjoIQDrVEjtbGb0rqvtZFvwiIH2wMD957L95r3803j8wDL914z8x1T7uyD80oD8zmv8w0PrRj/+4JrymYX0lnDzjETzhib7gwn1SCL2Uzf0W0T+zsPr05PczIO1vFWlsjmktiiijG+bXamdZqOffralmM6jqeHV4fzN6t1iun5HtnUml6tXsmfn8uZKoKm53sRtsaqKwqljlvvH1/t6pfzp8P59wYe90M4LAAAEXklEQVR4nO3Za1vaSBQH8NFwE8nFpA2CWxdBRCu2bPECStu9tXuxd7SSdUvU7/8hdhKUJ8BMmLEnzuzzzP+VL3/POeOZMwEhFRUVFRUVFRUVFRUVlf9PthqN7eWdraePREOi2TWb2Wy2ae09e74rD2y5qYVxXct8vCOLazmrjWNZrR3RnlGiKlwx6/GuaFGQSRWul/tCNAnNqjTT3RZtIqg0symeNavStFJDRpXZFP2vSFLhsyX4yBNVmvtS7Dwlq7TSTzKqNEvoNKWqWjKqtOZTGVWWyJNFVZl7AotFVWklgTOLrnIFtpCuMjUpVaa4+R6jcpMcpHaxvbKy0m6XbT6VZiV13Ff3Dw67up7G0fXD3lFxRhajKj1PxnTc03V9YRz8d2dtyvXQqmInHRGNZemDVXEq+1gnmIKku0uiVPuHabIpdHXKLCrw077SpRTqto2Hxfkq8MlwHFOoW9ddF+NUsFP0KLZQo3Tb81TuHihqbW6lwmq156lAH6v7DJUKq7Uar7K2AFFlNhMuVseOU5ktyGN1wFgqPCDW4lQWZAPbrKagh+W41wRgqewOc6lwD49jXl6Qm2ibA4VZZXqtAN8S9gnTVBirjmiqJuQdWO7yoBb0nk1Wwb6cX3E1ELOK5C9FLyGvQPuEV/WKpHJBByha7fGhFvQTgsp0YRerfa6zHqg6r0szqCzwXsWtWuj9bE23T4Ne9ti2hWie/PLDJCrbAv/ocQ/Vr1GV6brL8A/m71O5ltVI4uvQvVWm6VruXiOZJ3yxm+YIfsHqT37Lrq+v//7mbWv7j8Q+dhSXmPPnX3+fnp6+e//h48dPnz5/yTOnnxTeOyucf/2awsld/BjEybDHSIbl1QepSiUVZuMis8iZTDURU+WOFKocGVSFCEkWlTfIpSay8Y/BrcoDoy5TlUlUKvdvjVu1CYyaKlSg+jbkLZbjg6IK04UKVIUrTpUxvIZEnRFQWJXnVV1BojyCKVD5vCrQwz4glQqrrnkPFuRoL8ye9JEKVbkmlnMFiCL3L1T1uWrlQM6FOrF/oYqrWKBn3Sb3b6TiKdaDlCpUoTzz3uBA3oHegIIaqRDrv6FhQE5Q4gCNqK4X2VgG6GVDbeCtCvkZFhbwtkBt4J0K+c58lgOLsqmlGqvQ5lwW9LbnMaiQX4sdW44BvFahSxYV6g9jBoRTg92qEHmxmlXhLi5SyuWAzqk7FW2yT6nQdTVDOF5OZpjEE5C1VqFraDjGWGYYhjOsgi6f91Fhl18d1nDPwizWqn4yJtbTHk3f38znN/1+UqIg9AuHpnqIsExRAaGihKpu5t3OQkI/7iJV87Y+QaG2UKjKi3tNiMt5zMtLXGiDVKyKtroLVqGZz3xSqMgzS7SK9P1RAhXxaIlXkTZlCVSEpVQG1ewHdylUyLuZ/MVEDhUu13nUJYsKu25S45+95FHhW7FwPqjkcpVKrnIm2jIR7+yyUK/X5UKpqKioqKioqKioqKioxOc/3LiRi8gLI/sAAAAASUVORK5CYII="
          alt="profile"
        />

        <p className="ml-5 mt-5 ">
          <span className="font-semibold">fkn</span> wants to connectsdkjdjk
        </p>
      </Flex>
      <Flex>
        <button className=" w-24 ml-4 acceptbtn rounded-md">accept</button>
        <Button className="w-24 ml-5">reject</Button>
      </Flex>
      <Flex>
        <Image
          className="max-h-12 ml-1 mt-3"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAMAAABmfEh9AAABKVBMVEX////7vARChfTqQzU0qFP7tgAgePPoIQ0LoDj93KWkwfn0pKWl0qn7ugA7gvTqQDHpMh/9367/+/U1f/T+9vbvfHXqPCr+7tH+9OHpKRb+8dn915XpMTf8xAD0PA4jif4fo0YzqjqTtfhGifS1yvqOyJv4zMrylpDynJb2t7f75ub52tjoIQDrVEjtbGb0rqvtZFvwiIH2wMD957L95r3803j8wDL914z8x1T7uyD80oD8zmv8w0PrRj/+4JrymYX0lnDzjETzhib7gwn1SCL2Uzf0W0T+zsPr05PczIO1vFWlsjmktiiijG+bXamdZqOffralmM6jqeHV4fzN6t1iun5HtnUml6tXsmfn8uZKoKm53sRtsaqKwqljlvvH1/t6pfzp8P59wYe90M4LAAAEXklEQVR4nO3Za1vaSBQH8NFwE8nFpA2CWxdBRCu2bPECStu9tXuxd7SSdUvU7/8hdhKUJ8BMmLEnzuzzzP+VL3/POeOZMwEhFRUVFRUVFRUVFRUVlf9PthqN7eWdraePREOi2TWb2Wy2ae09e74rD2y5qYVxXct8vCOLazmrjWNZrR3RnlGiKlwx6/GuaFGQSRWul/tCNAnNqjTT3RZtIqg0symeNavStFJDRpXZFP2vSFLhsyX4yBNVmvtS7Dwlq7TSTzKqNEvoNKWqWjKqtOZTGVWWyJNFVZl7AotFVWklgTOLrnIFtpCuMjUpVaa4+R6jcpMcpHaxvbKy0m6XbT6VZiV13Ff3Dw67up7G0fXD3lFxRhajKj1PxnTc03V9YRz8d2dtyvXQqmInHRGNZemDVXEq+1gnmIKku0uiVPuHabIpdHXKLCrw077SpRTqto2Hxfkq8MlwHFOoW9ddF+NUsFP0KLZQo3Tb81TuHihqbW6lwmq156lAH6v7DJUKq7Uar7K2AFFlNhMuVseOU5ktyGN1wFgqPCDW4lQWZAPbrKagh+W41wRgqewOc6lwD49jXl6Qm2ibA4VZZXqtAN8S9gnTVBirjmiqJuQdWO7yoBb0nk1Wwb6cX3E1ELOK5C9FLyGvQPuEV/WKpHJBByha7fGhFvQTgsp0YRerfa6zHqg6r0szqCzwXsWtWuj9bE23T4Ne9ti2hWie/PLDJCrbAv/ocQ/Vr1GV6brL8A/m71O5ltVI4uvQvVWm6VruXiOZJ3yxm+YIfsHqT37Lrq+v//7mbWv7j8Q+dhSXmPPnX3+fnp6+e//h48dPnz5/yTOnnxTeOyucf/2awsld/BjEybDHSIbl1QepSiUVZuMis8iZTDURU+WOFKocGVSFCEkWlTfIpSay8Y/BrcoDoy5TlUlUKvdvjVu1CYyaKlSg+jbkLZbjg6IK04UKVIUrTpUxvIZEnRFQWJXnVV1BojyCKVD5vCrQwz4glQqrrnkPFuRoL8ye9JEKVbkmlnMFiCL3L1T1uWrlQM6FOrF/oYqrWKBn3Sb3b6TiKdaDlCpUoTzz3uBA3oHegIIaqRDrv6FhQE5Q4gCNqK4X2VgG6GVDbeCtCvkZFhbwtkBt4J0K+c58lgOLsqmlGqvQ5lwW9LbnMaiQX4sdW44BvFahSxYV6g9jBoRTg92qEHmxmlXhLi5SyuWAzqk7FW2yT6nQdTVDOF5OZpjEE5C1VqFraDjGWGYYhjOsgi6f91Fhl18d1nDPwizWqn4yJtbTHk3f38znN/1+UqIg9AuHpnqIsExRAaGihKpu5t3OQkI/7iJV87Y+QaG2UKjKi3tNiMt5zMtLXGiDVKyKtroLVqGZz3xSqMgzS7SK9P1RAhXxaIlXkTZlCVSEpVQG1ewHdylUyLuZ/MVEDhUu13nUJYsKu25S45+95FHhW7FwPqjkcpVKrnIm2jIR7+yyUK/X5UKpqKioqKioqKioqKioxOc/3LiRi8gLI/sAAAAASUVORK5CYII="
          alt="profile"
        />
        <p className="ml-5 mt-5 ">
          <span className="font-semibold">fkn</span> wants to connectsdkjdjk
        </p>
      </Flex>
      <Flex>
        <button className=" w-24 ml-4 acceptbtn rounded-md">accept</button>
        <Button className="w-24 ml-5">reject</Button>
      </Flex>
    </Box>
  );
}

export default LeftSidebar;
