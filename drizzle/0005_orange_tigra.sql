ALTER TABLE "deals" RENAME COLUMN "product_id" TO "post_id";--> statement-breakpoint
ALTER TABLE "deals" DROP CONSTRAINT "deals_product_id_products_id_fk";
--> statement-breakpoint
ALTER TABLE "deals" ALTER COLUMN "seller_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "deals" ALTER COLUMN "buyer_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "author_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "deals" ADD CONSTRAINT "deals_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE no action ON UPDATE no action;