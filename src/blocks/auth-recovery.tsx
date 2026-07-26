import * as React from "react";
import { useState } from "react";
import { InputPreset } from "../components/macro/input-preset";
import { Button } from "../components/micro/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/micro/card";

export default function AuthRecoveryBlock() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center p-4 bg-muted/20">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            {isSent ? "Kiểm tra email của bạn" : "Quên mật khẩu?"}
          </CardTitle>
          <CardDescription>
            {isSent
              ? "Chúng tôi đã gửi link đặt lại mật khẩu đến email của bạn."
              : "Không sao đâu, ai cũng có lúc quên mà. Nhập email vào đây để tụi mình gửi link reset cho nha."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSent ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <InputPreset id="recovery-email" type="email" label="Email" placeholder="m@example.com" required />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Đang gửi..." : "Gửi link reset mật khẩu"}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col gap-4">
              <Button type="button" variant="outline" className="w-full" onClick={() => setIsSent(false)}>
                Thử email khác
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" color="primary" className="text-sm">
            Quay lại đăng nhập
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
